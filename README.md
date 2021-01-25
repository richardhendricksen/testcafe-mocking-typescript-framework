# Testcafe Framework with mocking support in Typescript

## Run

#### Local
Run with `yarn test`.  
Reporting will be available in the `reports` folder.

#### Docker  
First build the image with `yarn docker:build`.  
This will install your local node dependencies into the root image.  
Make sure to rerun this command after updating your node dependencies.  

After this run the tests in Docker with `yarn docker:test`.  
Reporting will still be available in the `reports` folder.

#### Reporting
Open report: `yarn test:report:open`  
Generate HTML report: `yarn test:report:generate`

## CI
Run with CI config: `yarn test:ci`

#### Bitbucket Pipelines
See `bitbucket-pipelines.yml`
