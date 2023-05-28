import { Client, Issuer } from "openid-client";

export interface OpenIDConfig {
  client_id: string;
  client_secret: string;
  authorization_endpoint: string;
  token_endpoint: string;
  userinfo_endpoint: string;
  redirect_uri: string;
  scope: string;
}

export default async function initOpenIDClient(config: OpenIDConfig): Promise<Client> {
  const issuer = await Issuer.discover(config.authorization_endpoint);
  return new issuer.Client({
    client_id: config.client_id,
    client_secret: config.client_secret,
    token_endpoint: config.token_endpoint,
    userinfo_endpoint: config.userinfo_endpoint,
    redirect_uri: config.redirect_uri,
  });
}