class CreateTermsConditions < ActiveRecord::Migration[5.1]
  def change
    create_table :terms_conditions do |t|
      t.text :context

      t.timestamps
    end
  end
end
