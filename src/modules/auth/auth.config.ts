import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfig {
  constructor(private configService: ConfigService) {}
  public userPoolId: string = this.configService.get<string>('cognito.poolId');
  public clientId: string = this.configService.get<string>('cognito.clientId');
  public region: string = this.configService.get<string>('cognito.region');
  public authority = `https://cognito-idp.${this.region}.amazonaws.com/${this.userPoolId}`;
}
