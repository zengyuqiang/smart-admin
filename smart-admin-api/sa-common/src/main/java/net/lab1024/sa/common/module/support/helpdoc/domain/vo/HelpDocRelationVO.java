package net.lab1024.sa.common.module.support.helpdoc.domain.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 帮助文档 关联项目
 *
 * @Author 曾
 * @Date 2023-05-21 22:34:00 
 * @Wechat 
 * @Email 739224682@qq.com 
 * @Copyright 
 */
@Data
public class HelpDocRelationVO {

    @ApiModelProperty("关联名称")
    private String relationName;

    @ApiModelProperty("关联id")
    private Long relationId;
}
