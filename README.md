# docker-jiff
containerized https://github.com/multiparty/jiff


```docker build -t docker-jiff .``` <br>
```docker run -p 8080:8080 -e demo="vote" docker-jiff```

demo="$val" <br>
Supported demos $val:
* array-binary-search
* array-bubble-sort
* array-concat
* array-merge-sort
* array-shell-sort
* array-substring
* fixednegative-min
* fixedpoint-sum
* graphs-pip
* graphs-simple-squares
* image-comparison
* mpc-as-a-service
* pca
* standard-deviation
* sum
* template
* the-valentine-question
* threshold
* vote
* vote-check
* web-mpc

