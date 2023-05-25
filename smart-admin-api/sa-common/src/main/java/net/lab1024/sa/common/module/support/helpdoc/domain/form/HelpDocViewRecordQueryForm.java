package net.lab1024.sa.common.module.support.helpdoc.domain.form;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import net.lab1024.sa.common.common.domain.PageParam;

import javax.validation.constraints.NotNull;

/**
 * 查阅记录 查询
 *
 * @Author 曾
 * @Date 2023-05-21 22:34:00 
 * @Wechat 
 * @Email 739224682@qq.com 
 * @Copyright 
 */
@Data
public class HelpDocViewRecordQueryForm extends PageParam {

    @ApiModelProperty("帮助文档id")
    @NotNull(message = "帮助文档id不能为空")
    private Long helpDocId;

    @ApiModelProperty("用户id")
    private Long userId;

    @ApiModelProperty("关键字")
    private String keywords;


}
