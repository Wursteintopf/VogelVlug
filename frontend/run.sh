yarn install

if [ $NODE_ENV = "development" ]
then 
  echo 'Running Development Server:'
  next dev
else
  echo 'Running Production Server:'
  next start
fi