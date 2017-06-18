class ChangedFaqAnswerType < ActiveRecord::Migration[5.1]
  def change
    change_column :faqs, :answer, :text
    change_column :faqs, :question, :text
  end
end
