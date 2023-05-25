# Welcome to front end project for TRUENORTH-APP.
This document contain front end requirments in **Code Challenge**

## URL and Login
* Please refer to [URL](http://nameless-peak-01824.herokuapp.com/example/login)
* Users to authenticate
 `user: user2`, `password: password2`
 and
 `user: user1`, `password: password1`

## Technologies used 
* ReactJS.
* NEXT JS.
* Redux.
* @roketid/windmill-react-ui: it is similar to Bootstrap and Materialize.
* TypeScript.
* Docker.
* Cypress

##Intall app in local
* Clone project.
* Intall NODE version v16.20.0 with NVM. 
* npm i  

Other option is create a docker image and run it.
 
## Requirements complete an important details.

* **Atomation test:** It's using cypress, to make the full behavior [link](https://github.com/wavila88/front-operations-north/blob/main/cypress/e2e/loginLogout.cy.ts)

* **Infraestructure:**
* It is using a [Dockerfile](https://github.com/wavila88/TrueNorthBack/blob/master/Dockerfile) to create and image and deploy it into ECR.
