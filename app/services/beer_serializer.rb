class BeerSerializer

  def initialize(beer_obj)
    @beer_object = beer_obj
  end

  def to_serialized_json
    @beer_object.to_json({
      include: {brewery: {except: [:created_at, :updated_at]}},
      except: [:created_at, :updated_at]
    })
  end
end
