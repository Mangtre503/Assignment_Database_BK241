package com.database241.onlinetutorfinding.request;

import java.io.Serializable;

public record DateAndTimeDto
        (
                Long weekId,
                Long slotId
        )
        implements Serializable
{
}
