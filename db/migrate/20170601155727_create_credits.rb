class CreateCredits < ActiveRecord::Migration[5.1]
  def change
    create_table :credits do |t|
      t.string :clause
      t.integer :point
      t.string :point_text
      t.integer :credit_type_id

      t.timestamps
    end
  end
end
