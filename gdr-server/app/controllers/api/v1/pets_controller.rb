class Api::V1::PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update, :destroy]
  
  # GET /pets
  def index
    if logged_in?
      @pets = current_user.pets.sort_by(&:name)
      # @pets = Pet.all
      render json: PetSerializer.new(@pets)
    else
      render json: {
        error: "You must be logged in to see pets."
      }
    end 
  end

  # GET /pets/1
  # def show
  #   render json: @pet
  # end

  # POST /pets
  def create
    @pet = Pet.new(pet_params)
    @pet.organization_id = current_user.organization_id
    @pet.user_id = current_user.id

    if @pet.save
      render json: PetSerializer.new(@pet)
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pets/1
  def update
    if @pet.update(pet_params)
      render json: PetSerializer.new(@pet)
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pets/1
  # def destroy
  #   @pet.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pet
      @pet = Pet.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def pet_params
      params.require(:pet).permit(:organization_id, :user_id, :name, :breed, :birthdate, :photo)
    end
end