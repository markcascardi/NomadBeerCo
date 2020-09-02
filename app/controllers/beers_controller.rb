class BeersController < ApplicationController

  def index
    beers = Beer.all
    render json: BeerSerializer.new(beers).to_serialized_json
  end

  def show
    beer = Beer.find(params[:id])
    render json: BeerSerializer.new(beer).to_serialized_json
  end

  def create
    beer = Beer.new(beer_params)
    if beer.save
      render json: BeerSerializer.new(beer).to_serialized_json
    else
      render json: {error: "Beer not created"}
    end
  end

  def update
    beer = Beer.find(params[:id])
    beer.update(beer_params)
    render json: BeerSerializer.new(beer).to_serialized_json
  end

  def destroy
    beer = Beer.find(params[:id])
    beer.destroy
  end

  private

  def beer_params
    params.require(:beer).permit(:brewery_id, :name, :style, :abv,
                   :rating, :description, :thumbs_up, :image_url)
  end

end
