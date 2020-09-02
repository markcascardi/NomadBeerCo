class BrewerySerializer

  def initialize(brewery_obj)
    @brewery_object = brewery_obj
  end

  def to_serialized_json
    @brewery_object.to_json({
      include: {beers: {except: [:created_at, :updated_at]}},
      except: [:created_at, :updated_at]
    })
  end
end
