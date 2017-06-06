ActiveAdmin.register Credit do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
permit_params do
  permitted = [:clause, :point, :point_text, :credit_type_id, :priority]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   params.permit!
end

end
