class BreweriesController < ApplicationController

  def index
    breweries = Brewery.all
    render json: BrewerySerializer.new(breweries).to_serialized_json
  end

  def show
    brewery = Brewery.find(params[:id])
    render json: BrewerySerializer.new(brewery).to_serialized_json
  end

  def create
    brewery = Brewery.new(brewery_params)
    if brewery.save
      render json: BrewerySerializer.new(brewery).to_serialized_json
    else
      render json: {error: "Brewery not created"}
    end
  end

  def update
    brewery = Brewery.find(params[:id])
    brewery.update(brewery_params)
    render json: BrewerySerializer.new(brewery).to_serialized_json
  end

  def destroy
    brewery = Brewery.find(params[:id])
    brewery.destroy
  end

  private

  def brewery_params
    params.require(:brewery).permit(:name, :address, :city,
                   :state, :zip_code, :image_url)
  end
end
