class CreateBeers < ActiveRecord::Migration[6.0]
  def change
    create_table :beers do |t|
      t.integer :brewery_id
      t.string :name
      t.string :style
      t.float :abv
      t.float :rating
      t.text :description
      t.string :thumbs_up
      t.string :image_url

      t.timestamps
    end
  end
end
