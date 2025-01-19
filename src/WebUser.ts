import { UserState } from "./UserState";
import { Customer } from "./Customer";
export  class WebUser {
    private login_id: string;
    private password: string;
    private state: UserState;

    constructor(login_id: string, password: string,) {
        this.login_id = login_id;
        this.password = password;
        this.state = UserState.NEW
      
    }

    public getLogin_id(): string {
        return this.login_id
    }

    public setPassword(password: string):void {
        this.password = password;
    }

    public getState(): UserState {
        return this.state;
    }

    public setState(state: UserState): void {
        this.state = state;
    }

    public toString(): string {
        return `WebUser [ID: ${this.login_id}, State: ${this.state},Password: ${this.password}]`;
    }
}
