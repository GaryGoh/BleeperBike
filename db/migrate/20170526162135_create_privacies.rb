class CreatePrivacies < ActiveRecord::Migration[5.1]
  def change
    create_table :privacies do |t|
      t.text :context

      t.timestamps
    end
  end
end
