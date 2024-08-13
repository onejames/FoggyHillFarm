
export class UserModel {
    firstName: string;
    lastName: string;
    email: string;
    authenticated: boolean;

    constructor () {
        this.firstName = 'Guest';
        this.lastName = '';
        this.email = '';
        this.authenticated = false;
    }
}

export interface UserInterface extends UserModel {
    
} 