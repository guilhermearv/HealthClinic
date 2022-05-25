# HealthClinic
Study crud on a medical clinic composed of a .Net Core API, AngularJS FrontEnd and SQL Server database

### Stack usage
- .Net Core 5
- AngularJS
- SQL Server
  
### Requirements

- Visual studio or visual studio code
- NodeJS
- AngularCli
  
### Star app backEnd

Init Visual studio open folder HealthClinic and start IISExpress mode debug

### Start app frontEnd

- Open folder HealthClinicView in VS Code (IDE of your choice)
- Open Cli terminal, access the folder HealthClinicView
- Exec command line below for start app AngularJS

```shell
PS yourrepository> ng serve
```

### Start Sql server in docker 

To start the local database it is necessary to have docker installed on your machine to run the sql server. After starting docker just run the following command in the power shell

```shell
PS yourrepository> docker-compose up -d mssql-developer
```

### Stop Sql server in docker 

If you want to stop the docker service, just run the following command

```shell
PS yourrepository> docker-compose down
```

### Getting help

- https://material.angular.io/
- https://angular.io/docs
- https://docs.microsoft.com/pt-br/aspnet/core/?view=aspnetcore-6.0

