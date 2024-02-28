import fetch from 'node-fetch';
import dotenv from 'dotenv';
const accessTokenModule = require('../../accessToken');
dotenv.config();

export default async function handler(req, res) {
  const a = accessTokenModule.getAccessToken();
  
    const clientId = 'c4226cf0a5894fef915038d76c3ab896';
    const clientSecret = '1b972edc171f41f18ce19ea28cc23cd0';
  
    const authUrl = 'https://accounts.spotify.com/api/token';
  
  
    const authData = new URLSearchParams();
    authData.append('grant_type', 'client_credentials');
  
    const authHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    };
  
    const authResponse = await fetch(authUrl, {
      method: 'POST',
      body: authData,
      headers: authHeaders,
    });
  
    const authDatas = await authResponse.json();
    const accessToken = authDatas.access_token;
    accessTokenModule.setAccessToken(accessToken);
    
  
  
  const searchUrl = 'https://api.spotify.com/v1/search';
  const query = 'q=FosterPeople&type=track';  
  const searchHeaders = {
    Authorization: `Bearer ${a}`,
  };

  const searchResponse = await fetch(`${searchUrl}?${query}`, {
    method: 'GET',
    headers: searchHeaders,
  });

  const searchData = await searchResponse.json();
  res.status(200).json(searchData);
}
