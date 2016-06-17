if [ "$1" == "" ]
then
  echo "number of components missing"
  echo "e.g: bin/create-child-components.sh 10"
  exit 1
fi

(cd src/component; rm child-*; node create-child-components.js $1)

