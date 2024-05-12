FROM --platform=linux/amd64 ruby:3.2.3
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV RAILS_ENV=production

RUN apt-get update -qq \
  && apt-get install -y ca-certificates curl gnupg \
  && mkdir -p /etc/apt/keyrings \
  && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
  && NODE_MAJOR=20 \
  && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
  && wget --quiet -O - /tmp/pubkey.gpg https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

  # ビルドツール，Node.js, Yarn, Vimのインストール
RUN apt-get update -qq && apt-get install -y build-essential libssl-dev nodejs yarn vim

RUN mkdir /myapp
WORKDIR /myapp

# 本番環境ではこちらでbundle install
COPY ./Gemfile /myapp/Gemfile
COPY ./Gemfile.lock /myapp/Gemfile.lock



RUN bundle install
COPY . /myapp

COPY start.sh /start.sh
RUN chmod 744 /start.sh
CMD ["sh", "/start.sh"]