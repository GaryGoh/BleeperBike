json.extract! faq, :id, :question, :answer, :priority, :created_at, :updated_at
json.url faq_url(faq, format: :json)
