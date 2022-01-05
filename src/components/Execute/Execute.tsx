import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { RightPanelButton, ExecuteRequest, RowExecute } from '../../common-elements';
import { l } from '../../services/Labels';
import { getPlayloadSample } from '../../services';
import { PayloadCode } from '../PayloadSamples/PayloadCode';
import SwaggerClient from 'swagger-client';
import { ResponseServer } from '../ResponseServer/ResponseServer';
import { LoadingSimple } from "../Loading/LoadingSimple";
import PathParameters from "../PathParameters/PathParameters";
import {getAuthCredentials, isAuth} from "../../utils/auth"

interface componentInterface {
  operation: any;
  onTogle: any;
}

const Execute: FunctionComponent<componentInterface> = ({ operation, onTogle }) => {

  const { codeSamples } = operation
  const [isTry, setIsTry] = useState(false)
  const [value, setValue] = useState("")
  const samples = getPlayloadSample(codeSamples)
  const [server, setServer] = useState(operation.servers[0].url)
  const [response, setResponse] = useState({})
  const [isFetching, setIsFetching] = useState(false)
  const [form, setForm] = useState<any>(null)

  const onChange = (e) => {
    setValue(e)
  }

  const onExecute = () => {

    setResponse({})
    setIsFetching(true)

    isParameters() ? onFormSubmit() : fetchRequest()

  }

  const fetchRequest = (paths?, queries?, fields?) => {

    const isNeedAuth = true
    const authType = "Hawk"

    const mediaType = operation?.requestBody?.content?.mediaTypes[0]?.name

    const method = operation.httpVerb
    let url = `${server}${operation.path ? operation.path : ''}`

    if (queries?.length) url = `${url}${encodeParams(queries)}`

    if (paths?.length) {
      paths.forEach(item => {
        url = url.replace("{"+item.name+"}", item.value)
      });
    }

    let request: {[k: string]: any} = {
      url: url,
      mode: 'cors',
      method: method,
      responseInterceptor: (r) => {
        setResponse(r)
        setIsFetching(false)
      }
    };

    if(fields?.length) {
      request = {
        ...request,
        body: fields,
        headers: {
          ...request.headers,
          "Content-Type": mediaType ? mediaType : "application/json"
        }
      }
    }

    if (value) {
      request = {
        ...request,
        body: value,
        headers: {
          ...request.headers,
          "Content-Type": mediaType ? mediaType : "application/json"
        }
      }
    }

    if (isNeedAuth && isAuth()) {

      const authorization = getAuthCredentials(authType, `${server}${operation.path ? operation.path : ''}`, value, mediaType, method)

      request = {
        ...request,
        headers: {
          ...request.headers,
          ...authorization ? {"Authorization": authorization} : {}
        }
      }
    }

    SwaggerClient.http(request)
  }

  const onChangeServer = (server) => {
    setServer(server)
  }

  const isParameters = () => {
    return operation.operationSpec.parameters?.length > 0
  }

  const onFormSubmit = () => {
    const formData = new FormData(form);

    let paths: Array<any> = []
    let fields: Array<any> = []
    let queries: Array<any> = []

    formData.forEach((value, key) => {
      const type = key.split("_")[1]
      const name = key.split("_")[0]

      if (type === "path") paths.push({ "name": name, "value": value })
      if (type === "query") queries.push({ "name": name, "value": value })
      if (type == "formData") fields.push({ "name": name, "value": value });

    });

    if (paths.length || fields.length || queries.length) fetchRequest(paths, queries, fields)

  }

  const encodeParams = (array) => {
    let str = ""

    array.forEach((item, i) => {
      str += i == 0 ? `?${item.name}=${item.value}` : `&${item.name}=${item.value}`
    })

    return str
  }

  return (
    <div>
      {(isTry && codeSamples) &&
        <ExecuteRequest>
          {samples &&
            <PayloadCode
              variant="execute"
              content={samples.requestBodyContent}
              servers={operation.servers}
              onChange={onChange}
              onChangeServer={onChangeServer}
            />
          }
          {isParameters() && <PathParameters onFormInit={setForm} operationSpec={operation.operationSpec} />}
        </ExecuteRequest>
      }
      {!isTry && <RowExecute>
        <RightPanelButton
          onClick={
            () => {
              setIsTry(true);
              onTogle(false);
            }}
        >
          {l('tryItOut')}
        </RightPanelButton>
      </RowExecute>
      }
      {isTry && <RowExecute>
        <RightPanelButton
          style={{ width: "calc(50% - 10px)" }}
          onClick={
            () => {
              setIsTry(false);
              onTogle(true);
              setResponse({});
              setIsFetching(false);
            }}
        >
          {l('backToSamples')}
        </RightPanelButton>
        <RightPanelButton
          onClick={onExecute}
          className='primary'
          disabled={isFetching}
          style={{ width: "calc(50% - 10px)" }}>
          {(isFetching) && <LoadingSimple color="#ffffff" />}
          {l('execute')}
        </RightPanelButton>
      </RowExecute>}
      {Object.keys(response).length > 0 && <ResponseServer response={response} />}
    </div>
  );
}


export default Execute