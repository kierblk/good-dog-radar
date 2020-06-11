# Good Dog Radar - Dev Notes

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Good Dog Radar - Dev Notes](#good-dog-radar-dev-notes)
  - [Overview](#overview)
  - [User Stories](#user-stories)
- [GDR Server](#gdr-server)
  - [Models](#models)
    - [Pet](#pet)
    - [Organization](#organization)
    - [Comment](#comment)
    - [Medication](#medication)
    - [User](#user)
- [GDR Client](#gdr-client)
- [Resources Used](#resources-used)

<!-- /code_chunk_output -->

---

## Overview

This app will allow a user to keep track of dogs within an organization (dog rescue, animal shelter, boarding facility, etc).

## User Stories

An Admin User can ...

- sign up and log in
- create an oranization
- add a pet to their organization
- see a list of all pets within their organizaton
- edit a pet within their organization
- can delete a pet from their organization
- leave comments on all pets within their organization
- add medication to pets within their organization

A Foster-Parent User can ...

- sign up and log in
- join an organization
- edit pets they are assigned within their organization
- see a list of all pets within their organization
- leave comments about pets they are assigned within their organization
- add medications to pets assigned to them within their organization

# GDR Server

`rails new gdr-server --api --webpack=react --database=postgresql`

## Models

### Pet

`rails g resource Pet organization_id:integer user_id:integer name:string breed:string birthdate:date photo:string --no-test-framework`

| Relationships                                                      | Attributes                                                                                                                                          |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| belongs_to :organization<br>belongs_to :user<br>has_many :comments | :organization_id - reference<br>:user_id - reference<br>:name - string<br>:breed - string<br>:birthdate - datetime<br>:photo - string (URL for now) |

### Organization

`rails g resource Organization name:string contact_person:string contact_email:string contact_phone:string --no-test-framework`

| Relationships                                                           | Attributes                                                                                       |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| has_many :pets<br>has_many :users<br>has_many :comments, through: :pets | :name - string<br>:contact_person - string<br>:contact_email - string<br>:contact_phone - string |

### Comment

`rails g resource Comment pet_id:integer user_id:integer comment_date:datetime comment_body:string --no-test-framework`

| Relationships                       | Attributes                                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| belongs_to :pet<br>belongs_to :user | :pet_id - reference<br>:user_id - reference<br>:comment_date - datetime<br>:comment_body - string |

### Medication

`rails g resource Medication med_name:string med_reason:string med_instructions:string med_frequency:string med_dosage:string med_prescriber_name:string med_prescriber_phone:string --no-test-framework`

| Relationships   | Attributes                                                                                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| belongs_to :pet | :med_name - string<br>:med_reason - string<br>:med_instructions - string<br>:med_frequency - string<br>:med_dosage - string<br>:med_prescriber_name - string<br>:med_prescriber_phone - string |

### User

`rails g resource User organization_id:integer name:string email:string phone:string --no-test-framework`

| Relationships                                                    | Attributes                                                                                                                                                                         |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| has_many :pets<br>belongs_to :organization<br>has_many :comments | :organization_id - reference<br>:name - string<br>:email - string<br>:phone - string<br>:admin - boolean<br><br>To be added later:<br><br>:username - string<br>:password - string |

# GDR Client

Not yet implemented.

# Resources Used

1. [Tables Generator - Markdown](https://www.tablesgenerator.com/markdown_tables)
2. [Heroku - Good Dog Radar](https://good-dog-radar.herokuapp.com/)
3. [Fast JSON API Serializer](https://github.com/Netflix/fast_jsonapi)
4. [Rails HTTP Status Codes](https://gist.github.com/mlanett/a31c340b132ddefa9cca)
