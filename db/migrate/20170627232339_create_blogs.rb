class CreateBlogs < ActiveRecord::Migration[5.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :content
      t.string :author
      t.string :image_url
      t.boolean :is_activate

      t.timestamps
    end
  end
end
