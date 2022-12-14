.ONESHELL: # Applies to every targets in the file! .ONESHELL instructs make to invoke a single instance of the shell and provide it with the entire recipe, regardless of how many lines it contains.
.SHELLFLAGS = -ec

########################################################################################################################
# General
########################################################################################################################
.PHONY: test
test: frontend-test

########################################################################################################################
# Frontend
########################################################################################################################
.PHONY: frontend-dep
frontend-dep:
	npm ci

.PHONY: frontend-build
frontend-build: frontend-dep
	npx ng build ngx-fhir --configuration production

.PHONY: frontend-test
# reduce logging, disable angular-cli analytics for ci environment
frontend-test: frontend-dep
	npx ng test --watch=false

.PHONY: frontend-test-coverage
# reduce logging, disable angular-cli analytics for ci environment
frontend-test-coverage: frontend-dep
	npx ng test --watch=false --code-coverage

.PHONY: frontend-test-ci
# reduce logging, disable angular-cli analytics for ci environment
frontend-test-ci: frontend-dep
	npx ng test --watch=false --browsers=ChromeHeadless

.PHONY: frontend-test-coverage-ci
# reduce logging, disable angular-cli analytics for ci environment
frontend-test-coverage-ci: frontend-dep
	npx ng test --watch=false --code-coverage --browsers=ChromeHeadless


.PHONY: frontend-storybook
frontend-storybook: frontend-test-ci
	npm run build-storybook
