import Agent from './agent'
import buildConnector from './connector';
import Dispatcher from './dispatcher'

export default ProxyAgent

declare class ProxyAgent extends Dispatcher {
  constructor(options: ProxyAgent.Options | string)

  dispatch(options: Agent.DispatchOptions, handler: Dispatcher.DispatchHandlers): boolean;
  close(): Promise<void>;
}

declare namespace ProxyAgent {
  export interface Options extends Agent.Options {
    uri: string;
    /**
     * @deprecated use opts.token
     */
    auth?: string;
    token?: string;
    requestTls?: buildConnector.BuildOptions;
    proxyTls?: buildConnector.BuildOptions;
  }
}
