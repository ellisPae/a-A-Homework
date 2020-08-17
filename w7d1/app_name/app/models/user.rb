require 'securerandom'

class User < ApplicationRecord
    validates :username, :session_token, presence: true
    validates :password_digest, presence: true, length: {minimum: 6, allow_nil: true}
    before_validation :ensure_session_token


    def self.find_by_credentials(username, pw)
        User.where(username: username, password_digest: pw)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        @user = User.find_by_credentials
        @user[session_token] = User.geneate_session_token
    end

    def ensure_session_token
        @user = User.find_by_credentials
        @user[session_token] = User.geneate_session_token unless @user[session_tokeb]
    end



end
