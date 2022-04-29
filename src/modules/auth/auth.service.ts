import { AuthConfig } from './auth.config';
import { Injectable } from '@nestjs/common';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import { AuthCredentialsDto } from './dto/api-request/auth-credentials.dto';
import { AuthRegisterDto } from './dto/api-request/auth-register.dto';
//import { User } from '../../db/entity/user.entity';

@Injectable()
export class AuthService {
  private userPool: CognitoUserPool;
  constructor(private readonly authConfig: AuthConfig) {
    this.userPool = new CognitoUserPool({
      UserPoolId: this.authConfig.userPoolId,
      ClientId: this.authConfig.clientId,
    });
  }

  authenticateUser(user: AuthCredentialsDto) {
    const { name, password } = user;

    const authenticationDetails = new AuthenticationDetails({
      Username: name,
      Password: password,
    });
    const userData = {
      Username: name,
      Pool: this.userPool,
    };

    const newUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          console.log(result, 'result');
          resolve(result);
        },
        onFailure: (err) => {
          console.log(err, 'err');
          reject(err);
        },
      });
    });
  }
  registerUser(registerRequest: AuthRegisterDto) {
    const { name, password } = registerRequest;
    const phoneData = {
      Name: 'phone_number',
      Value: name,
    };
    const phoneAttribute = new CognitoUserAttribute(phoneData);
    return new Promise((resolve, reject) => {
      return this.userPool.signUp(
        name,
        password,
        [phoneAttribute],
        null,
        (err, result) => {
          if (!result) {
            reject(err);
          } else {
            const user = {
              cognito_id: result.userSub,
              name,
            };
            resolve(user);
          }
        },
      );
    });
  }
}
