# Dashboards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Configuration

The application configuration can be accessed in /assets/config/main.json. There you can configure or add dashboards, the available chart types (line, area, etc) for new chart creation, and the default chart to be merged with when creating a new chart.

## Ngrx model

All the ngrx files have been placed in the /src/app/store folder.
The state has been split between the config and dashboard states. The dashboard state contains the list of dashboards, and a state controlling whether a new dashboard is being created.
Each dashboard of that list is itself mainly a list of charts.

The actions controlled by the store are:
- GetConfig: when trying to fetch the configuration file.
- GetConfigSuccess: when configuration successfully fetched.
- GetConfigFail: when the configuration request fails.
- GetDashboards: to decouple the dashboards model from the config, on dashboard-list component load.
- EditNewDashboard: when user selects to create a new dashboard. It triggers the creatingDashboard state.
- CreateDashboard: when the user confirms the new dashboard to be created. It pushes a new dashboard to the dashboards field of the dashboard state.
- AddChart: when the `New Chart` form is submitted. It pushes a new Chart to the charts array of the active dashboard.

Only the config actions are deemed to have side effects, and are controlled in the getConfig$ @Effect. The rest of the actions are processed directly by their respective reducers.

The selectChartTypes and selectDefaultChart have been created for the form to have access directly to the corresponding slices of the config state.

