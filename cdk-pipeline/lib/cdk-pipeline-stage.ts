
import { RemovalPolicy, Stage, StageProps, CfnOutput } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface WorkshopPipelineStageProps extends StageProps {
    readonly bucketName: string;
}

export class WorkshopPipelineStage extends Stage {
  constructor(scope: Construct, id: string, props: WorkshopPipelineStageProps) {
    super(scope, id, props);

    new s3.Bucket(scope, 'Bucket', {
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        encryption: s3.BucketEncryption.S3_MANAGED,
        enforceSSL: true,
        versioned: true,
        removalPolicy: RemovalPolicy.RETAIN,
        bucketName: props.bucketName,
      });
      
  }
}