goto https://console.cloud.google.com/apis/credentials 

Create or select a Google APIs project. If you already have a project for the Sign In With Google button or Google One Tap, use the existing project and the web client ID. When creating production applications, multiple projects may be necessary, the remaining steps will be repeated for each project you manage.

Click Create credentials > OAuth client ID and for Application type select Web application to create a new client ID. To use an existing client ID select one of type Web application.

Add the URI of your website to Authorized JavaScript origins. The URI includes the scheme and fully qualified hostname only. For example, https://www.example.com.

add the url to Authorised redirect URIs that you want to send the token . Only the url that added here will allowed for redirection

For local tests or development add both http://localhost and http://localhost:port_number

add your redirect URIs to Authorized redirect URIs. Redirect URIs include the scheme, fully qualified hostname, and path and must comply with Redirect URI validation rules.
eg : http://localhost:3000/auth/google

add <script src="https://accounts.google.com/gsi/client" async></script> to the html/hbs or whatever file

then you can go to https://developers.google.com/identity/gsi/web/tools/configurator and generate the html code for the signin button /one tap button

paste it in the html/hbs or whatever file

Done .

for more info visit https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid