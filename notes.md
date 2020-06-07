# GDR Server Notes

rails new gdr-server --api --webpack=react --database=postgresql

Various notes taken for this project.

## Models

### Pet

rails g resource Pet organization_id:integer user_id:integer name:string breed:string birthdate:date photo:string --no-test-framework

---

#### Pet << Relationships

- belongs_to :organization
- belongs_to :user
- has_many :comments

#### Pet << Attributes

- :organization_id - reference
- :user_id - reference
- :name - string
- :breed - string
- :birthdate - datetime
- :photo - string (URL for now)

### Organization

rails g resource Organization name:string contact_person:string contact_email:string contact_phone:string --no-test-framework

---

#### Organization << Relationships

- has_many :pets
- has_many :users
- has_many :comments, through: :pets

#### Organization << Attributes

- :name - string
- :contact_person - string
- :contact_email - string
- :contact_phone - string

### Comment

rails g resource Comment pet_id:integer user_id:integer comment_date:datetime comment_body:string --no-test-framework

---

#### Comment << Relationships

- belongs_to :pet
- belongs_to :user

#### Comment << Attributes

- :pet_id - reference
- :user_id - reference
- :comment_date - datetime
- :comment_body - string

### Medication

rails g resource Medication med_name:string med_reason:string med_instructions:string med_frequency:string med_dosage:string med_prescriber_name:string med_prescriber_phone:string --no-test-framework

---

#### Medication << Relationships

- belongs_to :pet

#### Medication << Attributes

- :med_name - string
- :med_reason - string
- :med_instructions - string
- :med_frequency - string
- :med_dosage - string
- :med_prescriber_name - string
- :med_prescriber_phone - string

### User

rails g resource User organization_id:integer name:string email:string phone:string --no-test-framework

---

#### User << Relationships

- has_many :pets
- belongs_to :organization
- has_many :comments

#### User << Attributes

- :organization_id - reference
- :name - string
- :email - string
- :phone - string

To be added later:

- :username - string
- :password - string
