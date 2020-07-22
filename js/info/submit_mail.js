// Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:5e2c8030-2a39-4d25-a980-cc163cbf617f',
});

// Amazon Cognito Userpoolの指定＋クライアントアプリの指定
const poolData = {
  UserPoolId: 'ap-northeast-1_XHxS2fxC1', //ユーザープールのID
  ClientId: '12j4en8cbf95ofe2f05nl6lduj' //クライアントアプリの設定上のID
};
//ユーザープール＋クライアントアプリの情報を格納
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
let attributeList = []; //本来であればattributelistに電話番号や住所など入れることも可能（今回はしない）
