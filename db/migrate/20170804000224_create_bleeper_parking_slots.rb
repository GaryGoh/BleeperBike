class CreateBleeperParkingSlots < ActiveRecord::Migration[5.1]
  def change
    create_table :bleeper_parking_slots do |t|
      t.string :address
      t.string :address_line1
      t.string :address_line2
      t.string :city
      t.string :country
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
