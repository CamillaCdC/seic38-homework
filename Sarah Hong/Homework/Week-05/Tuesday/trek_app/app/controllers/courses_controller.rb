class CoursesController < ApplicationController
  def index
    @courses = Course.all
  end

  def show
    @course = Course.find params[:id]
  end

  def new
  end

  def create
    course = Course.create :name => params[:name], :location => params[:location], :distance => params[:distance], :image => params[:image], :difficulty => params[:difficulty], :days => params[:days]
    redirect_to course_path(course.id)
  end

  def edit
    @course = Course.find params[:id] # get course id to edit
  end

  def update
    course = Course.find params[:id] # get the course ID
    course.name = params[:name]
    course.location = params[:location]
    course.distance = params[:distance]
    course.image = params[:image]
    course.difficulty = params[:difficulty]
    course.days = params[:days]
    course.save # save updated course
    redirect_to course_path(course.id)  # Redirect to show page of updated course id
  end

  def destroy
  course = Course.find params[:id] # get the id to delete/destroy
  course.destroy # destroy the course
  redirect_to courses_path # to the list of ALL trekking courses. Use pluralized path
  end
end
