ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    div class: "blank_slate_container", id: "dashboard_default_message" do
      span class: "blank_slate" do
        # span I18n.t("active_admin.dashboard_welcome.welcome")
        # small I18n.t("active_admin.dashboard_welcome.call_to_action")
        span "Welcome to BleeperBike Dashboard."

      end
    end

    # Here is an example of a simple dashboard with columns and panels.
    #
    columns do
      column do
        panel "Info" do
          h4 "Current login is: " +  current_admin_user.email + "; at " + current_admin_user.current_sign_in_at.to_s
        end
      end

      column do
        panel "Recent added users" do
          ul do
            AdminUser.all.map do |user|
              li link_to(user.email, admin_admin_user_path(user))
            end
          end
        end
      end

    end
  end # content
end
