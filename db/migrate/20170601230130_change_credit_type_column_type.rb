class ChangeCreditTypeColumnType < ActiveRecord::Migration[5.1]
  def change
    rename_column :credit_types, :type, :credit_type
  end
end
