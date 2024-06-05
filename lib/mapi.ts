/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/health": {
    /**
     * Health Check
     * @description Checks the health of a project.
     *
     * It returns 200 if the project is healthy.
     */
    get: operations["health_check_api_health_get"];
  };
  "/api/models": {
    /**
     * Get all models
     * @description Get all models.
     */
    get: operations["get_models_api_models_get"];
    /**
     * Create a new model
     * @description Create a new model.
     */
    post: operations["create_model_api_models_post"];
  };
  "/api/models/{model_id}": {
    /**
     * Get a model
     * @description Get a model.
     */
    get: operations["get_modle_api_models__model_id__get"];
  };
  "/api/jobs": {
    /**
     * Get all jobs
     * @description Get all jobs.
     */
    get: operations["get_jobs_api_jobs_get"];
    /**
     * Create a new job
     * @description Create a new job.
     */
    post: operations["create_job_api_jobs_post"];
  };
  "/api/jobs/train": {
    /**
     * Run job to train model
     * @description Run job to train model.
     */
    post: operations["run_train_model_api_jobs_train_post"];
  };
  "/api/jobs/test": {
    /**
     * Run job to test model
     * @description Run job to test model.
     */
    post: operations["run_test_model_api_jobs_test_post"];
  };
  "/api/datasets": {
    /**
     * Get All datasets user has access to
     * @description Get all datasets.
     */
    get: operations["fetch_datasets_api_datasets_get"];
    /**
     * Upload a new dataset
     * @description Upload a new dataset.
     */
    post: operations["create_dataset_api_datasets_post"];
  };
  "/api/datasets/{dataset_id}": {
    /**
     * Get a dataset
     * @description Get a dataset.
     */
    get: operations["fetch_dataset_api_datasets__dataset_id__get"];
  };
  "/api/results/user/{user_id}": {
    /**
     * Get all results for a user
     * @description Get all results for a user.
     */
    get: operations["get_results_api_results_user__user_id__get"];
  };
  "/api/results/{result_id}": {
    /**
     * Get a result
     * @description Get a result.
     */
    get: operations["get_result_api_results__result_id__get"];
  };
  "/api/results/train": {
    /**
     * Submit training results for a job
     * @description Submit training results for a job.
     */
    post: operations["submit_train_results_api_results_train_post"];
  };
  "/api/results/test": {
    /**
     * Submit testing results for a job
     * @description Submit testing results for a job.
     */
    post: operations["submit_test_results_api_results_test_post"];
  };
  "/api/results/download/{result_id}": {
    /**
     * Download a result
     * @description Download a result.
     */
    get: operations["zip_files_for_download_api_results_download__result_id__get"];
  };
  "/api/results/download/{result_id}/{file_name}": {
    /**
     * Download a file from a result
     * @description Download a file from a result.
     */
    get: operations["download_file_api_results_download__result_id___file_name__get"];
  };
  "/api/iam/ssh_key": {
    /**
     * Get Key Pair
     * @description Get the key pair for a user.
     */
    get: operations["get_key_pair_api_iam_ssh_key_get"];
    /**
     * Gen Key Pair
     * @description Generate a new key pair for a user.
     */
    post: operations["gen_key_pair_api_iam_ssh_key_post"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * CreateModelRequest
     * @description Request model for creating a new model.
     */
    CreateModelRequest: {
      /** Name */
      name: string;
      /** Description */
      description: string;
      /** Owner Id */
      owner_id: string;
      /** Version */
      version: string;
      /** Parameters */
      parameters: Record<string, never>;
      /**
       * Private
       * @default false
       */
      private?: boolean;
      /** Default Model */
      default_model?: string;
    };
    /**
     * Dataset
     * @description Base model for all datasets.
     * @example {
     *   "id": "uuid",
     *   "name": "string",
     *   "description": "string",
     *   "path": "string",
     *   "private": true,
     *   "owner_id": "string",
     *   "created": "datetime",
     *   "modified": "datetime"
     * }
     */
    Dataset: {
      /**
       * Id
       * Format: uuid
       */
      id?: string;
      /** Name */
      name: string;
      /** Description */
      description?: string;
      /** Path */
      path: string;
      /**
       * Private
       * @default false
       */
      private?: boolean;
      /** Owner Id */
      owner_id: string;
      /**
       * Created
       * Format: date-time
       */
      created?: string;
      /**
       * Modified
       * Format: date-time
       */
      modified?: string;
    };
    /**
     * DatasetInForm
     * @description Dataset form model.
     */
    DatasetInForm: {
      /** Name */
      name: string;
      /** Description */
      description: string;
      /** Owner Id */
      owner_id: string;
      /**
       * File
       * Format: binary
       */
      file: string;
      /** Private */
      private: boolean;
    };
    /**
     * DatasetResponse
     * @description Dataset response
     */
    DatasetResponse: {
      /** Id */
      id: string;
      /** Name */
      name: string;
      /** Description */
      description: string;
      /** Path */
      path: string;
      /** Private */
      private: boolean;
      /** Owner Id */
      owner_id: string;
      /** Created At */
      created_at: string;
      /** Updated At */
      updated_at: string;
      /**
       * Files
       * @default []
       */
      files?: unknown[];
    };
    /**
     * FileResponse
     * @description File
     */
    FileResponse: {
      /** Name */
      name: string;
      /** Size */
      size: number;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /**
     * Job
     * @description Job model
     * @example {
     *   "id": "uuid",
     *   "name": "string",
     *   "description": "string",
     *   "model_id": "uuid",
     *   "model_name": "string",
     *   "owner_id": "string",
     *   "model_branch": "string",
     *   "dataset_branch": "string",
     *   "parameters": "{\"json\": \"json\"}",
     *   "created": "datetime",
     *   "modified": "datetime",
     *   "results": [
     *     {
     *       "id": "uuid",
     *       "owner_id": "string",
     *       "name": "string",
     *       "result_type": "string",
     *       "dataset_id": "uuid",
     *       "status": "string",
     *       "created": "datetime",
     *       "modified": "datetime",
     *       "metrics": "{\"json\": \"json\"}",
     *       "files": "{\"json\": \"json\"}",
     *       "parameters": "{\"json\": \"json\"}",
     *       "pretrained_model": "string",
     *       "predictions": "{\"json\": \"json\"}"
     *     }
     *   ]
     * }
     */
    Job: {
      /**
       * Id
       * Format: uuid
       */
      id?: string;
      /** Name */
      name: string;
      /** Description */
      description: string;
      /**
       * Model Id
       * Format: uuid
       */
      model_id: string;
      /** Model Name */
      model_name: string;
      /** Owner Id */
      owner_id: string;
      /** Model Branch */
      model_branch?: string;
      /** Dataset Branch */
      dataset_branch?: string;
      /**
       * Parameters
       * Format: json-string
       * @default {}
       */
      parameters?: string;
      /**
       * Created
       * Format: date-time
       */
      created?: string;
      /**
       * Modified
       * Format: date-time
       */
      modified?: string;
    };
    /**
     * JobIn
     * @description Job in
     */
    JobIn: {
      /** Name */
      name: string;
      /** Description */
      description: string;
      /** Owner Id */
      owner_id: string;
      /**
       * Model Id
       * Format: uuid
       */
      model_id: string;
      /** Parameters */
      parameters?: Record<string, never>;
      /** Branch */
      branch?: string;
    };
    /**
     * Model
     * @description Base model for all models.
     * @example {
     *   "id": "uuid",
     *   "name": "string",
     *   "description": "string",
     *   "version": "string",
     *   "created": "datetime",
     *   "modified": "datetime",
     *   "path": "string",
     *   "owner_id": "string",
     *   "parameters": "{\"json\": \"json\"}",
     *   "private": true,
     *   "default_model": "string"
     * }
     */
    Model: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Name */
      name: string;
      /** Description */
      description: string;
      /** Version */
      version: string;
      /**
       * Created
       * Format: date-time
       */
      created?: string;
      /**
       * Modified
       * Format: date-time
       */
      modified?: string;
      /** Path */
      path: string;
      /** Owner Id */
      owner_id: string;
      /**
       * Parameters
       * Format: json-string
       * @default {}
       */
      parameters?: string;
      /**
       * Private
       * @default false
       */
      private?: boolean;
      /** Default Model */
      default_model: string;
    };
    /**
     * ModelResponse
     * @description Model response
     */
    ModelResponse: {
      /** Id */
      id: string;
      /** Name */
      name: string;
      /** Description */
      description: string;
      /** Path */
      path: string;
      /** Private */
      private: boolean;
      /** Owner Id */
      owner_id: string;
      /** Created At */
      created_at: string;
      /** Updated At */
      updated_at: string;
      /** Parameters */
      parameters: Record<string, never>;
      /**
       * Layers
       * @default []
       */
      layers?: Record<string, never>[];
      /**
       * Files
       * @default []
       */
      files?: unknown[];
    };
    /**
     * ResultResponse
     * @description Result response
     */
    ResultResponse: {
      /** Size */
      size: number;
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Owner Id */
      owner_id: string;
      /** Result Type */
      result_type: string;
      /** Job */
      job?: unknown;
      /**
       * Dataset Id
       * Format: uuid
       */
      dataset_id: string;
      /** Status */
      status: string;
      /** Created */
      created?: unknown;
      /** Modified */
      modified?: unknown;
      /** Metrics */
      metrics?: unknown;
      /** Files */
      files: components["schemas"]["FileResponse"][];
      /** Parameters */
      parameters: Record<string, never>;
      /** Model Name */
      model_name: string;
      /** Model Version */
      model_version: string;
      /** Model Description */
      model_description: string;
      /** Dataset Name */
      dataset_name: string;
      /** Dataset Description */
      dataset_description: string;
    };
    /**
     * TestModelIn
     * @description Test model in
     */
    TestModelIn: {
      /**
       * Job Id
       * Format: uuid
       */
      job_id: string;
      /** User Id */
      user_id: string;
      /**
       * Dataset Id
       * Format: uuid
       */
      dataset_id: string;
      /**
       * Parameters
       * @default {}
       */
      parameters?: Record<string, never>;
      /**
       * Use Train Result Id
       * Format: uuid
       */
      use_train_result_id?: string;
      /** Name */
      name: string;
    };
    /**
     * TrainModelIn
     * @description Train model in
     */
    TrainModelIn: {
      /**
       * Job Id
       * Format: uuid
       */
      job_id: string;
      /** User Id */
      user_id: string;
      /**
       * Dataset Id
       * Format: uuid
       */
      dataset_id: string;
      /**
       * Parameters
       * @default {}
       */
      parameters?: Record<string, never>;
      /** Name */
      name: string;
    };
    /** UpdateKeyRequest */
    UpdateKeyRequest: {
      /** Public Key */
      public_key: string;
    };
    /**
     * UserKeyPair
     * @description Model for User Key Pair.
     * @example {
     *   "id": "uuid",
     *   "user_id": "string",
     *   "public_key": "string",
     *   "created": "datetime",
     *   "modified": "datetime"
     * }
     */
    UserKeyPair: {
      /**
       * Id
       * Format: uuid
       */
      id?: string;
      /** User Id */
      user_id: string;
      /** Public Key */
      public_key: string;
      /**
       * Created
       * Format: date-time
       */
      created?: string;
      /**
       * Modified
       * Format: date-time
       */
      modified?: string;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Health Check
   * @description Checks the health of a project.
   *
   * It returns 200 if the project is healthy.
   */
  health_check_api_health_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  /**
   * Get all models
   * @description Get all models.
   */
  get_models_api_models_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Model"][];
        };
      };
    };
  };
  /**
   * Create a new model
   * @description Create a new model.
   */
  create_model_api_models_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateModelRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Get a model
   * @description Get a model.
   */
  get_modle_api_models__model_id__get: {
    parameters: {
      path: {
        model_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ModelResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Get all jobs
   * @description Get all jobs.
   */
  get_jobs_api_jobs_get: {
    parameters: {
      query: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Job"][];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Create a new job
   * @description Create a new job.
   */
  create_job_api_jobs_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["JobIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Run job to train model
   * @description Run job to train model.
   */
  run_train_model_api_jobs_train_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TrainModelIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Run job to test model
   * @description Run job to test model.
   */
  run_test_model_api_jobs_test_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TestModelIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Get All datasets user has access to
   * @description Get all datasets.
   */
  fetch_datasets_api_datasets_get: {
    parameters: {
      query?: {
        user_id?: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Dataset"][];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Upload a new dataset
   * @description Upload a new dataset.
   */
  create_dataset_api_datasets_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["DatasetInForm"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Dataset"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Get a dataset
   * @description Get a dataset.
   */
  fetch_dataset_api_datasets__dataset_id__get: {
    parameters: {
      path: {
        dataset_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["DatasetResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Get all results for a user
   * @description Get all results for a user.
   */
  get_results_api_results_user__user_id__get: {
    parameters: {
      path: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": Record<string, never>[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Get a result
   * @description Get a result.
   */
  get_result_api_results__result_id__get: {
    parameters: {
      path: {
        result_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ResultResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Submit training results for a job
   * @description Submit training results for a job.
   */
  submit_train_results_api_results_train_post: {
    parameters: {
      query?: {
        error?: boolean;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Submit testing results for a job
   * @description Submit testing results for a job.
   */
  submit_test_results_api_results_test_post: {
    parameters: {
      query?: {
        error?: boolean;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Download a result
   * @description Download a result.
   */
  zip_files_for_download_api_results_download__result_id__get: {
    parameters: {
      path: {
        result_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Download a file from a result
   * @description Download a file from a result.
   */
  download_file_api_results_download__result_id___file_name__get: {
    parameters: {
      path: {
        result_id: string;
        file_name: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Get Key Pair
   * @description Get the key pair for a user.
   */
  get_key_pair_api_iam_ssh_key_get: {
    parameters: {
      query: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["UserKeyPair"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Gen Key Pair
   * @description Generate a new key pair for a user.
   */
  gen_key_pair_api_iam_ssh_key_post: {
    parameters: {
      query: {
        user_id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateKeyRequest"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["UserKeyPair"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
}
