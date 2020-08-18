class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def welcome_mail(user)
    @user = user

    mail(to: @user.email, subject: "But why though...")
  end

end
