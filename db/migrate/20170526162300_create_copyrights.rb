class CreateCopyrights < ActiveRecord::Migration[5.1]
  def change
    create_table :copyrights do |t|
      t.string :context

      t.timestamps
    end
  end
end
