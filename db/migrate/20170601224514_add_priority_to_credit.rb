class AddPriorityToCredit < ActiveRecord::Migration[5.1]
  def change
    add_column :credits, :priority, :integer
  end
end
