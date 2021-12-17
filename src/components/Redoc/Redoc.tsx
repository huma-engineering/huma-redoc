import * as PropTypes from 'prop-types';
import * as React from 'react';

import { ThemeProvider } from '../../styled-components';
import { OptionsProvider } from '../OptionsProvider';

import { AppStore } from '../../services';
import { ApiInfo } from '../ApiInfo/';
import { ContentItems } from '../ContentItems/ContentItems';
import { SideMenu } from '../SideMenu/SideMenu';
import { StickyResponsiveSidebar } from '../StickySidebar/StickyResponsiveSidebar';
import { ApiContentWrap, BackgroundStub, RedocWrap } from './styled.elements';

import { SearchBox } from '../SearchBox/SearchBox';
import { StoreProvider } from '../StoreBuilder';
import {ModalAuth} from '../Modals';
import { l } from '../../services/Labels';
import { RowAuthorize } from "../../common-elements/fields-layout";
import { Button } from "../../common-elements/buttons";
import { IconLock } from '../../common-elements';

export interface RedocProps {
  store: AppStore;
}

export class Redoc extends React.Component<RedocProps> {

  state = {
    showAuthorization: false,
  };

  static propTypes = {
    store: PropTypes.instanceOf(AppStore).isRequired,
  };

  componentDidMount() {
    this.props.store.onDidMount();
  }

  componentWillUnmount() {
    this.props.store.dispose();
  }

  render() {

    const {
      store: { menu, options, search, marker },
    } = this.props;
    const store = this.props.store;

    return (
      <ThemeProvider theme={options.theme}>
        <StoreProvider value={store}>
          <OptionsProvider value={options}>
            <RedocWrap className="redoc-wrap">
              <StickyResponsiveSidebar menu={menu} className="menu-content">
                {(!options.disableSearch && (
                  <SearchBox
                    search={search!}
                    marker={marker}
                    getItemById={menu.getItemById}
                    onActivate={menu.activateAndScroll}
                  />
                )) ||
                  null}
                <RowAuthorize>
                  <IconLock style={{ marginRight: "1rem" }} />
                  <Button style={{width: "100%"}} onClick={() => this.setState({ showAuthorization: true })}>{l("authorize")}</Button>
                </RowAuthorize>
                <SideMenu menu={menu} />
              </StickyResponsiveSidebar>
              <ApiContentWrap className="api-content">
                <ApiInfo store={store} />
                <ContentItems items={menu.items as any} />
              </ApiContentWrap>
              <BackgroundStub />
              <ModalAuth show={this.state.showAuthorization} onClose={()=>this.setState({ showAuthorization: false })}/>
            </RedocWrap>
          </OptionsProvider>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}
