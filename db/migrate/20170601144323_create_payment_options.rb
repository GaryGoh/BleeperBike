class CreatePaymentOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :payment_options do |t|
      t.string :clause
      t.integer :priority

      t.timestamps
    end
  end
end
