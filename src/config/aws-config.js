// Example of various AWS Mobile Hub constants used by this project

// NOTE: AWS Mobile Hub will generate an aws-config file including these
// constants configured with the values of your project. You should use that
// file instead of this one. This is meant to show a sample of that file.

var aws_app_analytics = 'enable';
var aws_bots = 'enable';
var aws_bots_config = [{"name":"CoffeeBot","alias":"$LATEST","description":"","bot-template":"bot-import","commands-help":[],"region":"us-west-2"}];
var aws_cognito_identity_pool_id = 'us-west-2:3ebab375-35ae-46ff-abe7-7b9a5499ce46';
var aws_cognito_region = 'us-west-2';
var aws_content_delivery = 'enable';
var aws_content_delivery_bucket = 'coffeebotweb-hosting-mobilehub-4399525';
var aws_content_delivery_bucket_region = 'us-west-2';
var aws_content_delivery_cloudfront = 'enable';
var aws_content_delivery_cloudfront_domain = 'd2j3obmp6vmio.cloudfront.net';
var aws_mobile_analytics_app_id = '72b2408985444e08ae785e93bf2f963c';
var aws_mobile_analytics_app_region = 'us-east-1';
var aws_project_id = 'd4fc6ba3-24bf-4795-b409-0fcea35ca89f';
var aws_project_name = 'CoffeeBotWeb';
var aws_project_region = 'us-west-2';
var aws_resource_name_prefix = 'coffeebotweb-mobilehub-4399525';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
  });
AWS.config.update({customUserAgent: 'MobileHub v0.1'});
