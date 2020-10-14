require('sqlite3')
require('sinatra')
require('sinatra/reloader')

# HOME
get '/' do
  erb :home
end

# READ: Browse Cohort Collection
get '/student/index' do
  'Cohort SEIC38'
  erb :student_index
end

# CREATE: Create a new student
get '/student/create' do
  'Creat a student'
  erb :student_create
end

# UPDATE: Edit a student record
get '/student/edit' do
  'Edit a Student'
  erb :student_edit
end

# READ: Preview a student record
get '/student/show' do
  'View a Student'
  erb :student_show
end

# DELETE: Remove a student
get '/student/delete' do
  'Delete a student'
  erb :student_delete
end

# ************** Student Request Form ************** #
# CREATE: Student request form

get '/student/request/index' do
  'Student Request Index'
  erb :student_request_index
end

get '/student/request' do
  'Student Request'
  erb :student_request
end
