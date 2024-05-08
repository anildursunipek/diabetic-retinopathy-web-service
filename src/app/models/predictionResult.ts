export class PredictionResult {
  private _original_image : string | undefined;
  private _message: string | undefined;
  private _response_time: number | undefined;
  private _filename: string | undefined;
  private _inference_time: number | undefined;
  private _binary_prediction_result: Array<number> | undefined;
  private _preprocessed_image: string | undefined;
  private _multiclass_prediction_result : Array<number> | undefined;

  
  
  getOriginal_Image() : string | undefined{
    return this._original_image;
  }

  setOriginal_Image(value: string) {
    this._original_image = value;
  }
  
  getMessage(): string | undefined {
    return this._message;
  }
  
  setMessage(value: string | undefined): void {
    this._message = value;
  }
  
  getResponse_time(): number | undefined {
    return this._response_time;
  }
  
  setResponse_time(value: number | undefined): void {
    this._response_time = value;
  }
  
  getFilename(): string | undefined {
    return this._filename;
  }
  
  setFilename(value: string | undefined): void {
    this._filename = value;
  }
  
  getInference_time(): number | undefined {
    return this._inference_time;
  }
  
  setInference_time(value: number | undefined): void {
    this._inference_time = value;
  }
  
  getBinaryPrediction_result(): Array<number> | undefined {
    return this._binary_prediction_result;
  }
  
  setBinaryPrediction_result(value: Array<number> | undefined): void {
    this._binary_prediction_result = value;
  }
  
  getMultiClassPredictionResult() : Array<number> | undefined{
    return this._multiclass_prediction_result;
  }
  
  setMultiClassPredictionResult(value : Array<number>){
    this._multiclass_prediction_result = value;
  }
  
  getPreprocessed_image(): string | undefined {
    return this._preprocessed_image;
  }

  setPreprocessed_image(value: string | undefined): void {
    this._preprocessed_image = value;
  }
}

  