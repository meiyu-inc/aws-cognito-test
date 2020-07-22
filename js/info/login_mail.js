const poolData = {
  UserPoolId: 'ap-northeast-1_XHxS2fxC1',
  ClientId: '12j4en8cbf95ofe2f05nl6lduj'
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:9b9e13a8-e57b-4c19-afdf-1e1a7a96207e',
});

