// Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:XXXXXXXXXXXXXXXXXXXXXｘ',
});

// Amazon Cognito Userpoolの指定＋クライアントアプリの指定
const poolData = {
  UserPoolId: 'ap-northeast-1_XXXXXXXXXX', //ユーザープールのID
  ClientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXx' //クライアントアプリの設定上のID
};
//ユーザープール＋クライアントアプリの情報を格納
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
let attributeList = []; //本来であればattributelistに電話番号や住所など入れることも可能（今回はしない）
